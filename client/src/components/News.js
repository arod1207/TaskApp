import axios from 'axios';
import { useEffect, useState } from 'react';

import '../components/News.css';

const News = () => {
    const [data, setData] = useState([]);
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

    return (
        <div className="news">
            {data.map((news) => (
                <div className="news__card" key={news.id}>
                    <p>{news.title}</p>
                </div>
            ))}
        </div>
    );
};

export default News;
