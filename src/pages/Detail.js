import React from 'react';
import Post from '../components/Post';

import { useSelector } from 'react-redux';

import {firestore} from "../shared/firebase";

const Detail = (props) => {
  const id = props.match.params.id;
  const user_info = useSelector((state) => state.user.user);
  console.log(user_info);
  const post_list = useSelector((store) => store.post.list);
  const post_idx = post_list.findIndex((p) => p.id === id);
  const post_data = post_list[post_idx];

  const [post, setPost] = React.useState(post_data ? post_data : null);

  React.useEffect(() => {
    if (post) {
      return;
    }

    const postDB = firestore.collection('post');
    postDB
      .doc(id)
      .get()
      .then((doc) => {
        console.log(doc);
        console.log(doc.data());

        let _post = doc.data();
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf('user_') !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} },
        );

        setPost(post);
      });
  }, []);

  return (
    <React.Fragment>
      {post && (
        <Post {...post} />
        //is_me={post.user_info.user_id === user_info.uid}가 안된당...
        //없어도 되는거 아닌가,,,
      )}
    </React.Fragment>
  );
};
export default Detail;
