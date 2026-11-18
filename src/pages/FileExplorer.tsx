import { useState } from 'react';

const data = [
  {
    parent: '1',
    children: ['1.1', '2.1', '3.1', {
      parent: '4.1',
      children: ['4.1.1', '4.1.2', {
        parent: '4.1.3',
        children: ['4.1.3.1', '4.1.3.2', '4.1.3.3', '4.1.3.4']
      }]
    }]
  },
  {
    parent: '2',
    children: [
      {
        parent: '2.1',
        children: ['2.1.1', '2.1.2', '2.2.2', '2.2.3']
      }
    ]
  },
  {
    parent: '3',
    children: ['3.1', '3.2', '3.3', '3.4']
  },
  {
    parent: '4',
    children: ['4.1']
  }
];


type FolderNode = {
  parent: string;
  children?: Array<string | FolderNode>;
};

type TreeViewProps = {
  node: FolderNode;
  level: number;
};


function TreeView({ node, level }: TreeViewProps) {
  
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="parent"
        onClick={() => setOpen((prev) => !prev)}
        style={{ width: 'fit-content' }}
      >
        {node.parent}
      </button>

      {open &&
        node.children &&
        node.children.map((child: string | FolderNode, index: number) =>
          typeof child === 'string' ? (
            <div
              key={`child-${index}`}
              className="child"
              style={{ marginLeft: `${(level + 1) + 20}px` }}
            >
              {child}
            </div>
            ) : (
            <TreeView
              key={`parent-${index}`}
              node={child}
              level={index + 1}
            />
          )
        )
      }
    </>
  );
}


export default function FileExplorer() {

  return (
    <div className="file-explorer"
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      {data.map((node, index) => 
        <TreeView
          key={`root-${index}`}
          node={node}
          level={0}
        />
      )}
    </div>
  );
}