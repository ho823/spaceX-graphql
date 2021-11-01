import { useQuery, gql } from '@apollo/client';
import styles from './Launches.module.css';

const LAUNCHES= gql`
  query GetLaunch {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      details
      links {
        video_link
      }
    }
  }
`;



function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.launches.map((el) => (
    <div className={styles.container}>
      <section className={styles.launch_card}>
      <h2 className={styles.title}>{el.rocket.rocket_name}</h2>
      <h3 className={styles.subtitle}>{el.launch_date_utc}</h3>
      <p className={styles.name}>{el.rocket.rocket_name}</p>
      <p className={styles.success}>{el.launch_success}</p>
      <p className={styles.description}>{el.details}</p>
      <p className={styles.link_video}>{el.links.video_link}</p>
      </section>
    </div>
  ));
}
export default Launches;