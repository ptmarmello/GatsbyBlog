import React from 'react';
import '../styles/divider.css';

export default function Divider(props) {
    return(
        <section style={{width: '90%', margin:'0 auto'}}>
            {props.type === 'Astro' && 
                <div class="astrodivider">
                    <div class="astrodividermask">
                    </div>
                    <span></span>
                </div>
            }

            {props.type === 'Normal' &&
                <div class="astrodivider" style={{marginTop: '20px'}}>
                    <div class="astrodividermask">
                    </div>
                </div>
            }

        </section>
    );
}