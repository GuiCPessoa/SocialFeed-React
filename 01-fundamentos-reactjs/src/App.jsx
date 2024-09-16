import { Header } from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';



export function App() {
  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post 
        author="Guilherme Caio" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo accusamus dicta fugiat fuga quaerat similique! Consequatur sapiente vel dignissimos dolores, deserunt ut provident voluptatem facere voluptas, molestias porro officia."
        />
      <Post
        author="Mirelle Evenyn"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis explicabo accusamus dicta fugiat fuga quaerat similique! Consequatur sapiente vel dignissimos dolores, deserunt ut provident voluptatem facere voluptas, molestias porro officia."
    />
      </main>
    </div>
   </div>
  )
}

