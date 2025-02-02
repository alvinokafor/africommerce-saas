import { HomeOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AdminNavs } from './Navs';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.3;

  .wrapper {
    display: flex;
    position: fixed;
    flex-direction: column;
    scroll-snap-type: mandatory;
    scroll-behavior: smooth;
    scroll-margin: 1px;
    scrollbar-width: thin;
    width: 100%;
    scrollbar-color: red;
    background: rgb(20, 20, 35);
    position: relative;
    max-height: 100vh;
    overflow-y: scroll;
    gap: 1rem;
    &::-webkit-scrollbar-corner {
      background: rgba(0, 0, 0, 0.5);
    }

    /* Works on Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
      width: 12px;
      height: 12px;
      color: red;
      background: rgb(26, 26, 39);
    }

    &::-webkit-scrollbar-track {
      background: pink;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgb(19, 19, 34);
      border-radius: 20px;
      border: 3px solid rgb(26, 26, 39);
    }
    .logo {
      display: flex;
      align-items: center;
      color: white;
      padding: 1rem;
      background: rgb(26, 26, 39);
      img {
        align-items: center;
        width: auto;
        max-width: 170px;
      }
    }
    .search {
      display: flex;
      margin: 0 auto;

      input {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        outline: none;
        background: inherit;
        color: white;
      }
    }
    .menu__body {
      background: rgb(20, 20, 35);
    }
    .dashboard {
      text-transform: capitalize;
      background: rgb(26, 26, 39);
      padding: 1rem;
      color: white;
      font-weight: bold;
      gap: 3px;
      display: flex;
      align-items: center;
    }
  }
`;
export const SideNav = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="logo">
          <img src="../../assets/logo.png" alt="" />
        </div>
        <div className="search">
          <input
            placeholder="Search"
            style={{
              border: '1px gray solid',
              borderRadius: '5px',
              padding: '10px',
            }}
          />
        </div>
        <Link to="/admin">
          <div className="dashboard">
            {' '}
            <span>
              <HomeOutlined
                style={{
                  color: 'gray',
                  fontSize: '17px',
                  alignItems: 'center',
                  fontWeight: 'normal',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              />
            </span>{' '}
            dashboard
          </div>
        </Link>
        <div className="menu__body">
          <AdminNavs />
        </div>
      </div>
    </Container>
  );
};
