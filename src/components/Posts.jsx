import React from 'react'
import {collection, getDocs, getFirestore, query, orderBy } from 'firebase/firestore'
import {app} from '../firebase';
import Post from './Post';

export default async function Posts() {
    const db = getFirestore(app);
    const q = query(collection(db, 'posts'), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
        data.push({id: doc.id, ... doc.data()});
    });
    return (
    <div>
        {data.map((post) =>(
            <Post key={post.id} post={post}/>
        ))}
    </div>
  )
}
