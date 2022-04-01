import React, { Component } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Hero from '../components/hero/BackgroundAsImage'
import Footer from "components/footers/FiveColumnWithInputForm.js";
import Playlist from "components/cards/VideoAccordian";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import loading from 'images/Animation/loading.gif'
import Feedback from "components/misc/Feedback";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
class AboutUs extends Component {

  state = {
    category: this.props.match.params.category,
    playlist: this.props.match.params.playlist,
    videosRaw: [],
    videos: '',
    loading: true,
    playlistLink: ''
  }

  returnSerial = (name) => {
    return (parseInt(name.match(/\[(.*?)\]/)[1]))
  }

  videoSorting = () => {
    // const videos = [
    //   {
    //     "name": "[2] Objet Level Security in Salesforce ",
    //     "link": "https://www.youtube.com/watch?v=hqTJ_v7ZzdA",
    //   },
    //   {
    //     "name": "[1] Organization level Security in Salesforce",
    //     "link": "https://www.youtube.com/watch?v=hqTJ_v7ZzdA",
    //   },
    //   {
    //     "name": "[0] Introduction to Data Security Model in Salesforce",
    //     "link": "https://www.youtube.com/watch?v=hqTJ_v7ZzdA",
    //   },
    // ]
    const videos = this.state.videosRaw
    const videoJSON = {}
    videos.map((video) => {
      videoJSON[this.returnSerial(video.name)] = video
    })


    this.setState({
      videos: videos,
      loading: false
    })
  }

  componentDidMount() {

    let playlist = this.props.match.params.playlist
    let category = this.props.match.params.category
    playlist = playlist.replace('-', ' ')
    this.setState({ playlist: playlist, category: category })

    const data = {
      "category": category.replace('-', ' '),
      "playlist": playlist.replace('-', ' ')
    }
    console.log(data)

    axios.post(`https://study-salesforce.herokuapp.com/video/search-by-playlist`, data)
      .then(res => {
        const videos = res.data;
        // console.log(res.data)
        if (typeof videos[1] === "undefined") {
          this.setState({ videosRaw: [] }, () => {
            this.videoSorting()
          });
          return
        }
        this.setState({ videosRaw: videos[0], playlistLink: videos[1].playlist_link }, () => {
          this.videoSorting()
        });
      })
      .catch(res => {
        console.log(res)
        this.setState({ videosRaw: [] }, () => {
          this.videoSorting()
        });

      })

  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.playlist !== prevProps.match.params.playlist
      || this.props.match.params.category !== prevProps.match.params.category
    ) {
      this.setState({ loading: true })
      this.componentDidMount()
    }
  }



  render() {
    return (
      <AnimationRevealPage>
        <div
          style={{
            backgroundColor: '#f4fbff'
          }}
        >
          <Header
          />
          <Hero playlist={this.state.playlist} category={this.state.category.replace('-', ' ')} playlistLink={this.state.playlistLink} />
          {
            this.state.loading
              ? <img src={loading} tw="mx-auto" height={'300px'} width={'300px'} />
              :
              <Playlist videos={this.state.videos} />
          }
          <Footer />
          <Feedback />
        </div>
      </AnimationRevealPage>

    )
  }
}

export default withRouter(AboutUs)