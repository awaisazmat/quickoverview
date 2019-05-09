// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import React from 'react'
import profilePic from './57109796_2301522480120086_590235214932869120_o.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Muhammad Awais Azmat`}
          style={{
            borderRadius:'50%',
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
A blog for quickoverview of some great books.         </p>
      </div>
    )
  }
}

export default Bio
