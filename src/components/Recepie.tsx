import React from 'react';
import viewIcon from '../assets/icons/view.png';
import heartIcon from '../assets/icons/heart_outline.png';
import commentIcon from '../assets/icons/comment.png';
import pancakes from '../assets/pancakes.png';
import ellipseYellow from '../assets/ellipse-yellow.png';
import './Recepie.css'

export const Recepie = () => {
    return (
        <article className="recepie-block">
            <img className="recepie-image" src={pancakes} alt="food" />
            <div className="recepie">
                <div className="recepie-title-block">
                    <h3 className="recepie-title">Fresh meat with potato and cheese</h3>
                    <h6 className="recepie-owner">John Doe</h6>
                </div>
                <p className="recepie-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo non ac eros, velit dapibus
                    consequat vestibulum sapien pharetra. Bibendum vel sollicitudin at purus egestas tincidunt.
                    Vulputate ac, ullamcorper etiam interdum vitae semper.</p>
                <div className="stats-block">
                    <div className="stats-items">
                        <span className="stats-item">
                            <img src={viewIcon} alt="views" />
                            <span>
                                <span>12000</span> views
                            </span>
                        </span>
                        <span className="stats-item">
                            <img src={heartIcon} alt="likes" />
                            <span>
                                <span>499</span> likes
                            </span>
                        </span>
                        <span className="stats-item">
                            <img src={commentIcon} alt="comments" />
                            <span>
                                <span>12</span> comments
                            </span>
                        </span>
                    </div>
                    <button className="change-recepie-btn">
                        <img src={ellipseYellow} alt="dot" />
                        <img src={ellipseYellow} alt="dot" />
                        <img src={ellipseYellow} alt="dot" />
                    </button>
                </div>
            </div>
        </article>
    )
};
