import React, { useState } from "react";
import { useParams } from "react-router";

function MusicDetails ({style}) {
  const params = useParams();
  const [musicInfo, setMusicInfo] = useState('');
  // useEffect(() => {
  //   if(`http://localhost:3000/music/${params.style}`)
  //   .then(({data}) => {
  //     setMusicInfo(data)
  //   }, [])
  console.log(window.location.pathname);
  console.log(style);

  return(
    <p>This is MusicDetails</p>
  )
}

export default MusicDetails;