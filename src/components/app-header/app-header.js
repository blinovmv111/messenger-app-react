import React from "react";

import "./app-header.css";
// import styled from 'styled-components';

// const Header = styled.div`
//     display: flex;
//     align-items: flex-end;
//     justify-content: space-between;
//     h1 {
//         font-size: 26px;
//         color: ${props => props.colored ? 'red' : 'black'};
//         :hover {
//             color: blue;
//         }
//       }
//       h2 {
//         font-size: 1.2rem;
//         color: grey;
//       }
// `

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header d-flex">
      <h1>Mihail Blinov</h1>
      <h2>
        {allPosts} записей, из них понравилось {liked}
      </h2>
    </div>
    // <Header colored>
    //     <h1>Ivan Petrichenko</h1>
    //     <h2>{allPosts} записей, из них понравилось {liked}</h2>
    // </Header>
    //Если компонент Header в какой-то момент нужно будет превратить в ссылку, можно сделать это так: <Header as='a'>
  );
};

export default AppHeader;
