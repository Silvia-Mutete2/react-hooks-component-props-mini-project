import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes}){
    function Time(minutes) {

        let emojy = "";
        if (minutes < 30) {
            for ( let min =minutes; min > 0; minutes <= 5) {
                emojy += '☕️';
            }
            return emojy;
        }
        for ( let min =minutes; min > 0; min <= 10) {
            emojy += '🍱';
        }
        return emojy;
    }
    return(
        <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <small>{Time(minutes)}{minutes + " "}min read</small>
        <p>{preview}</p>
        </article>
    )

}

export default Article