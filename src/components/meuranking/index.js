import {useSelector} from  'react-redux';
import React from 'react';

function MeuRanking(){
    const user = useSelector(({usuario})=> usuario.currentUser);
    return(
        <div class="meu-ranking-area">
            <div class="meu-ranking-header">
                <div class="meu-ranking-img">
                    <img src={`${user.avatar}`} />
                </div>
                <div class="meu-ranking-header-content">
                    <div class="header-content-ranking text">
                        {`#${user.ranking}`}
                    </div>
                </div>
            </div>
            <div class="meu-ranking-content">
                <div class="meu-ranking-score text">
                    {user.score}
                </div>
            </div>
        </div>
    )
}

export default MeuRanking;