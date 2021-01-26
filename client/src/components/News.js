import axios from 'axios';
import { useEffect, useState } from 'react';

import TinderCard from 'react-tinder-card';

import '../components/News.css';

const News = () => {
    const [data, setData] = useState([]);
    const [lastDirection, setLastDirection] = useState();
    console.log(data);
    useEffect(() => {
        axios
            .get('/news')

            .then((response) => {
                setData(response.data.news);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const swiped = (direction, storySwiped) => {
        setLastDirection(direction);
    };

    return (
        <div className="news">
            {data.map((news) => (
                <TinderCard
                    className="swipe"
                    key={news.id}
                    onSwipe={(direction) => {
                        swiped(direction, news.title);
                    }}
                >
                    <div className="news__card">
                        <a href={news.url} target="_blank">
                            <div className="news__image">
                                <img src={news.image} alt="news story" />
                            </div>
                        </a>
                        <div className="news__title">
                            <p>{news.title}</p>
                        </div>
                    </div>
                    <div className="news__swipe">
                        <h3>Swipe</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    );
};

export default News;
