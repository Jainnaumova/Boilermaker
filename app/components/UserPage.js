import React from "react";
import { connect } from "react-redux";
import "../../public/index.css";

const UserPage = props => {
  return (
    <div>
      <h1>Hello world</h1>
      <p>{props.user}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.users[0]
});

export default connect(mapStateToProps)(UserPage);
