import React from "react";
import './style.css';




function RankingItem(props){
    return(
        <div class="ranking-item">
            <div class="item-avatar">
                <img src={`${props.item.avatar}`} alt=""/>
            </div>
            <div class="item-content">
                <div class="item-score">{props.item.score}</div>
                <div class="item-conquista">
                </div>
            </div>
        </div>
    );
}

export default RankingItem;