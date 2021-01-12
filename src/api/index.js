import {
    version
} from '../../package.json';
import {
    Router
} from 'express';
import facets from './facets';

export default ({
    config,
    db
}) => {
    let api = Router();

    // perhaps expose some API metadata at the root
    api.post('/login', (req, res) => {
        if (req.body.password === ' ') {
            let body = {
                id: req.body.username,
                username: req.body.username,
                firstName: req.body.username,
                lastName: req.body.username,
                token: 'fake-jwt-token'
            };
            res.json({
                status: 200,
                body: body
            });
        } else {
            res.status(401).send('unauthorized');
        }
    });

    api.get('/mockData', (req, res) => {
        let body = [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true,
            likes: '358K'
        }, {
            name: 'Internet Explorer',
            y: 11.84,
            likes: '52K'
        }, {
            name: 'Firefox',
            y: 10.85,
            likes: '5K'
        }, {
            name: 'Edge',
            y: 4.67,
            likes: '56'
        }, {
            name: 'Safari',
            y: 4.18,
            likes: '105'
        }, {
            name: 'Other',
            y: 7.05
        }];
        res.json({
            status: 200,
            body: body
        });
    });

    return api;
}
