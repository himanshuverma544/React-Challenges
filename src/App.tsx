import './App.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import { HOME, challenges, NOT_FOUND } from './routes.ts';

import Layout from './pages/Layout.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';

import DarkMode from './pages/DarkMode.tsx';
import Accordion from './pages/Accordion.tsx';
import ProgressBar from './pages/ProgressBar.tsx';
import InputFocus from './pages/InputFocus.tsx';
import ApiDataFetching from './pages/ApiDataFetching.tsx';
import FileExplorer from './pages/FileExplorer.js';
import Timer from './pages/Timer.tsx';
import Modal from './pages/Modal.tsx';
import Rating from './pages/Rating.tsx';
import Pagination from './pages/Pagination.tsx';
import Otp from './pages/Otp.tsx';
import TodoList from './pages/TodoList.tsx';
import Tabs from './pages/Tabs.tsx';
import Test from "./pages/Test.tsx"

function App() {

  const [
    DARK_MODE,
    ACCORDION,
    PROGRESS_BAR,
    INPUT_FOCUS,
    API_DATA_FETCHING,
    FILE_EXPLORER,
    TIMER,
    MODAL,
    RATING,
    PAGINATION,
    OTP,
    TODO_LIST,
    TABS,
    TEST
  ] = challenges;

  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path={HOME.pathname} element={<Home />} />

          <Route path={DARK_MODE.pathname} element={<DarkMode />} />
          <Route path={ACCORDION.pathname} element={<Accordion />} />
          <Route path={PROGRESS_BAR.pathname} element={<ProgressBar />} />
          <Route path={INPUT_FOCUS.pathname} element={<InputFocus />} />
          <Route path={API_DATA_FETCHING.pathname} element={<ApiDataFetching />} />
          <Route path={FILE_EXPLORER.pathname} element={<FileExplorer />} />
          <Route path={TIMER.pathname} element={<Timer />} />
          <Route path={MODAL.pathname} element={<Modal />} />
          <Route path={RATING.pathname} element={<Rating />} />
          <Route path={PAGINATION.pathname} element={<Pagination />} />
          <Route path={OTP.pathname} element={<Otp />} />
          <Route path={TODO_LIST.pathname} element={<TodoList />} />
          <Route path={TABS.pathname} element={<Tabs />} />
          <Route path={TEST.pathname} element={<Test />} />
          

          <Route path={NOT_FOUND.pathname} element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}


export default App;