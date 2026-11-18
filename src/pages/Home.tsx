import { Link } from "react-router-dom";
import { challenges, type Challenge } from "./../routes.ts";

import { capitalize } from "./../utils/functions.ts";


export default function Home() {

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '51px',
        margin: '50px',
      }}
    >
      {challenges.map((challenge: Challenge, index: number) => (
        <Link
          key={index}
          to={{
            pathname: challenge.pathname,
            search: `?title=${encodeURIComponent(challenge.title)}&difficulty=${encodeURIComponent(challenge.difficulty)}`,
          }}
          style={{ color: '#000', textDecoration: 'none', display: 'block' }}
        >
          <div className={`challenge-card-${index}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              height: '5rem',
              width: '10rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '10px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <div className="title">
              {challenge.title}
            </div>
            <div
              className="difficulty"
              style={{ fontSize: '0.8rem', color: '#666' }}
            >
              {(capitalize(challenge.difficulty))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
