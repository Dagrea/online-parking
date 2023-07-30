import React from 'react';
import Home from './pages/Home/Home.jsx';
import Menu from './components/Menu/Menu.jsx';
import Footer from './components/Footer/Footer.jsx';
import Page404 from './pages/404/404.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import About from './pages/About/About.jsx';
import Help from './pages/Help/Help.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import LogIn from './pages/LogIn/LogIn.jsx';
import Payment from './pages/Payment/Payment.jsx';
import Vacancies from './pages/Vacancies/Vacancies.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.jsx';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse.jsx';
import { Container } from 'react-bootstrap'; 
import { Routes, BrowserRouter, Route } from 'react-router-dom';

function RouterApp() {
  return (
  	<div>
			<BrowserRouter>
				<div className="min-vh-100 bg-dark">
				<Menu/>
				<Routes>
				    <Route  path="/" element={<Home/>}>
				    </Route>
				    <Route  path="blog" element={<Blog/>}> 
				    </Route>
				    <Route  path="blogs/:blogId" element={<Blogs/>}> 
				    </Route>
				    <Route  path="about" element={<About/>}> 
				    </Route>
				    <Route  path="help" element={<Help/>}> 
				    </Route>
				    <Route  path="contacts" element={<Contacts/>}> 
				    </Route>
				    <Route  path="login" element={<LogIn/>}> 
				    </Route>
				    <Route  path="signup" element={<SignUp/>}> 
				    </Route>
				    <Route  path="payment" element={<Payment/>}> 
				    </Route>
				    <Route  path="vacancies" element={<Vacancies/>}> 
				    </Route>
				    <Route  path="terms_of_use" element={<TermsOfUse/>}> 
				    </Route>
				    <Route  path="privacy_policy" element={<PrivacyPolicy/>}> 
				    </Route>
				    <Route  path="*" element={<Page404/>}> 
				    </Route>
				</Routes>
				</div>
				<Footer/>
			</BrowserRouter>
    	</div>
      );
}

export default  RouterApp;