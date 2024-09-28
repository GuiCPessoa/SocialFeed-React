import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/guicpessoa.png',
      name: 'Guilherme Caio',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Iae pessoal 👋',},
      { type: 'paragraph', content: 'Acabei de finalizar mais um projeto e já subi no GitHub. O projeto que fiz no curso de React, na RocketSeat! O nome do projeto é Social Feed 🚀'},
      { type: 'link', content: 'github.com/guicpessoa'},
    
      ],

      publishedAt: new Date('2024-09-21 15:04:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu GitHub. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    
      ],

      publishedAt: new Date('2024-09-21 10:04:00'),
  },
]


export function App() {
  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              post={post}
            />
          )
        })}
      </main>
    </div>
   </div>
  )
}

