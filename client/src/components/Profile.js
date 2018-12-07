import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../api";
import "./profile.css";
import { Redirect } from "react-router-dom";
class Profile extends Component {
  constructor(props){
    super(props);
  }
  state = {
    redirect: false,
    redirecturl: "",
    data:[],
    redirectForId: false
  };

  makeMap = async () => {
    try {
      let { data } = await api.makeMap(this.props.match.params.uid);
        this.setState({
          redirect:true,
          redirecturl: "/app?" + data
        })
        window.location.href = "/app?" + data
      
    } catch (e) {
      if (!e.response) {
        console.log(e);
        return;
      }
    }
  };
  getMaps = async () => {
    var returnUI = [];
    try {
      api.getMaps(this.props.match.params.uid).then( data =>{
        for (let i = 0; i < data.data.length; i++) {
          var newState = this.state.data.concat([<a href={"/app?" + data.data[i]._id} key={`map_${i}`} id={`map_${i}`} className="profile-map-container"><div className="profile-map-header">{`Map #${i + 1}`}</div></a>]);
          this.setState({data:newState})
          var tag = document.createElement('script');
          tag.async = false;
          tag.innerHTML = `
            var tempInterval${i} = setInterval(function(){
              if(document.getElementById("map_${i}")){
                const element = new DOMParser().parseFromString('${data.data[i].body}', "text/xml");
                document.getElementById("map_${i}").appendChild(element.children[0]);
                clearInterval(tempInterval${i})
              }
            });
          `;
          document.getElementsByTagName("body")[0].appendChild(tag);
        }
        return returnUI;
      });
      
      
    } catch (e) {
      if (!e.response) {
        console.log(e);
        return;
      }
    }
    return returnUI;
  }
  componentWillMount(){
    
    if(this.props.location.pathname.length <= 10){
      this.setState({redirectForId:true})
      window.location.reload();
    } else {
      this.setState({redirectForId:false})
      this.getMaps();
    }
  }
  render(){
    const { userInfo } = this.props;
    let redirectForId = this.state.redirectForId ? <Redirect to={"/profile/" + this.props.userInfo._id} /> : "";
    return (
      <div>
        {redirectForId}
        <h3 className="profile-head">Welcome, {userInfo.name}</h3>
        <a className="profile-new-map" onClick={this.makeMap}>Create New Map</a>
        <div className="profile-map-row">
          { this.state.data }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

Profile = connect(mapStateToProps, null)(Profile);

export default Profile;
