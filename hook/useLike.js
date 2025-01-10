import { icons } from "../constants";
import { useState } from "react";

    const useLike = () => {
    const likedJobs = [];
    const [isLiked, setIsLiked] = useState(false);
    const likeIcon = isLiked ? icons.heart : icons.heartOutline;

    const handleClickLike = (data) => {
        if (isLiked === true) { // user unliked
            likedJobs.filter((job) => {
                return job !== data;
            })
            setIsLiked(false);
        
        } else { // user liked
            likedJobs.push(data);
            setIsLiked(true);
        }
    }

    return {
        likedJobs,
        likeIcon, 
        handleClickLike
    };
}

export default useLike;