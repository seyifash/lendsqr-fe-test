import 'boxicons/css/boxicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const dashBoardNavItems = [
    {id: 1, icon: <i className="fa-solid fa-user-group"></i>, name: "Users", link: "/lendsqr/users"},
    {id: 2, icon: <i className="fa-thin fa-users"></i>, name: "Guarantors", link: "/lendsqr/guarantors"},
    {id: 3, icon: <i className="fa-solid fa-sack-dollar"></i>, name: "Loans", link: "/lendsqr/loans"},
    {id: 4, icon: <i className="fa-regular fa-handshake"></i>, name: "Decision models", link: "/lendsqr/models"},
    {id: 5, icon: <i className='bx bx-store'></i>, name: "savings", link: "/lendsqr/savings"},
    {id: 6, icon: <i className='bx bx-objects-horizontal-left'></i>, name: "Loan Request", link: "/lendsqr/loans"},
    {id: 7,icon: <i className='bx bx-help-circle'></i>, name: "Whitelist", link: "/lendsqr/whitelist"},
    {id: 8, icon: <i className='bx bx-cog'></i>, name: "Karma", link: "/lendsqr/karma"},
];

export default dashBoardNavItems