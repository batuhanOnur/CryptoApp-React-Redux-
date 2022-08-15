import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd'; 
import { Navbar,Homepage,Exchanges,Cryptocurrencies,CryptoDetails,News } from './components';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path="/" element={<Homepage/>} />
                            <Route path="/exchanges" element={<Exchanges/>} />
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies/>} />
                            <Route path="/crypto/:coinId" element={<CryptoDetails/>} />
                            <Route path="/news" element={<News/>} />
                        </Routes>
                    </div>
                </Layout>
<<<<<<< HEAD
            </div>
            <div className="footer">

=======
                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse <br/>
                        All Rights Reserved.
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
>>>>>>> 99717bc (footer and homepage)
            </div>
        </div>
    )
}

export default App