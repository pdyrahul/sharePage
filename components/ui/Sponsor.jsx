import React from 'react';

const sponsorStyles = {

  mainHeading: {
    marginBottom: '20px',
  },
  sponsorCard: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    overflow: 'hidden',
    width: '300px', // Fixed width for card consistency
  },
  sponsorImage: {
    height: '200px', // Fixed height for image consistency
    overflow: 'hidden',
  },
  sponsorImageImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  sponsorDetails: {
    padding: '20px',
    flex: 1,
  },
  sponsorList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  sponsorListItem: {
    marginBottom: '10px',
  },
  sponsorListStrong: {
    color: '#333',
    marginRight: '5px',
  },
  description: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3, // Number of lines for description
    WebkitBoxOrient: 'vertical',
  },
};

const Sponsor = ({ data }) => {
  return (
    <div style={sponsorStyles.eventBoxWrapper}>
      <div style={sponsorStyles.mainHeading}>
        <h2>Sponsor</h2>
      </div>
      <div style={sponsorStyles.sponsorCard}>
        <div style={sponsorStyles.sponsorImage}>
          <img src={data.poster} alt={data.sponsor.sponsorName} style={sponsorStyles.sponsorImageImg} />
        </div>
        <div style={sponsorStyles.sponsorDetails}>
          <ul style={sponsorStyles.sponsorList}>
            <li style={sponsorStyles.sponsorListItem}>
              <strong style={sponsorStyles.sponsorListStrong}>Name:</strong> {data.sponsor.sponsorName}
            </li>
            <li style={sponsorStyles.sponsorListItem}>
              <strong style={sponsorStyles.sponsorListStrong}>Website:</strong> 
              <a href={data.sponsor.sponsorWebsite} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue' }}>
                {data.sponsor.sponsorWebsite}
              </a>
            </li>
            <li style={sponsorStyles.sponsorListItem}>
              <strong style={sponsorStyles.sponsorListStrong}>Description:</strong> 
              <p style={sponsorStyles.description}>{data.sponsor.sponsorDescription}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;