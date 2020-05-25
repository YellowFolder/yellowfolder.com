import Home from '../components/Home';

const HomePage = () => <Home />;

console.log(process.env.FRESHDESK_KEY_DEV);
console.log(process.env.LOCAL_FRESHDESK_KEY_DEV);

export default HomePage;
