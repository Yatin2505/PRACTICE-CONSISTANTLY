import React, { useState } from 'react';

function LikeButton() {
  // 1. Declare state (count starts at 0)
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <p>Likes: {likes}</p>
      {/* 2. Update state when clicked */}
      <button style={{cursor:"pointer"}} onClick={() =>{likes<100 ?setLikes(likes + 1) : alert("maximum like limit reached !")}} >
        Pasand Aaya! 👍
      </button>
    </div>
  );
}

export default LikeButton