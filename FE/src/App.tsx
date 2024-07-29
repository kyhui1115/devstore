import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from 'Pages/Main';
import SignIn from 'Pages/SignIn';
import SignUp from 'Pages/SignUp';
import SleeperAccount from 'Pages/SleeperAccount';
import Mypage from 'Pages/Mypage';
import OrderList from 'Components/KYH/Mypage/OrderList/OrderList';
import UserInfo from 'Components/KYH/Mypage/UserInfo/UserInfo';
import Bookmarks from 'Components/KYH/Mypage/Bookmarks/Bookmarks';
import ProductList from 'Components/KYH/admin/ProductList/ProductList';
import ProductInquiry from 'Components/KYH/admin/ProductInquiry/ProductInquiry';
import Admin from 'Pages/Admin';
import NoticeList from 'Pages/Notice/NoticeList';
import NoticePost from 'Pages/Notice/NoticePost';
import NoticeEdit from 'Pages/Notice/NoticeEdit';
import NoticeDetail from 'Pages/Notice/NoticeDetail';
import ProductPost from 'Pages/Product/ProductPost';
import ProductEdit from 'Pages/Product/ProductEdit';
import Cart from 'Pages/KHJ/Cart';
import PurchaseMain from 'Pages/KHJ/PurchaseMain';
import Purchase from 'Pages/KHJ/Purchase';
import AdminMain from 'Components/KYH/admin/AdminMain/AdminMain';
import BasicLayout from 'Pages/BasicLayout';
import ProductDetail from 'Pages/ProductDetail';
import OrderedList from 'Pages/OrderedList';
import ReviewManagement from 'Pages/ReviewManagement';
import Search from 'Pages/Search';
import Sales from 'Components/KYH/admin/Sales/Sales';
import Products from 'Pages/Products';
import SearchPassword from 'Pages/SearchPassword';
import OrderCom from 'Pages/KHJ/OrderCom';
import OrderComDetail from 'Pages/KHJ/OrderComDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="products/:category" element={<Products />} />
          <Route path="products/:category/:id" element={<ProductDetail />} />
          <Route path="search" element={<Search />} />
          <Route path="search/:id" element={<ProductDetail />} />
          <Route path="/notice" element={<NoticeList />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/searchpassword" element={<SearchPassword />} />
          <Route path="/sleeperaccount" element={<SleeperAccount />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/purchase" element={<PurchaseMain />}>
            <Route path="order" element={<Purchase />} />
          </Route>
          <Route path="/complete/:id" element={<OrderCom />} />
          <Route path="/complete/detail/:id" element={<OrderComDetail />} />
        </Route>

        <Route path="/mypage" element={<Mypage />}>
          <Route path="orderlist" element={<OrderList />} />
          <Route path="userinfo" element={<UserInfo />} />
          <Route path="bookmarks" element={<Bookmarks />} />
        </Route>

        <Route path="/admin" element={<Admin />}>
          <Route path="" element={<AdminMain />} />
          <Route path="productlist" element={<ProductList />} />
          <Route path="productinquiry" element={<ProductInquiry />} />
          <Route path="productlist/post" element={<ProductPost />} />
          <Route path="productlist/edit/:id" element={<ProductEdit />} />
          <Route path="reviewmanagement" element={<ReviewManagement />} />
          <Route path="orderedlist" element={<OrderedList />} />
          <Route path="sales" element={<Sales />} />
          <Route path="notice" element={<NoticeList />} />
          <Route path="notice/post" element={<NoticePost />} />
          <Route path="notice/edit/:id" element={<NoticeEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
