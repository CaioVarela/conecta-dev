import mock from '../utils/mock';

/* mock.onPost('/api/home/login').reply(200, {
    'id': 1,
    'username': 'Caio Varela',
    'email': 'caiovareladelima@gmail.com'
}) */

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data)

    if (email !== 'caiovareladelima@gmail.com' || password !== 'admin') {
        return [400, { message: 'Seu email ou senha estão incorretos' }]
    }

    const user = {
        'id': 1,
        'username': 'VoiaC',
        'name': 'Caio Varela',
        'email': 'caiovareladelima@gmail.com'
    }

    return [200, {user}]
});