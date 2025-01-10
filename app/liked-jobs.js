import useLike from "../hook/useLike";
import React from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";

import styles from "../components/home/nearby/nearbyjobs.style";
import NearbyJobCard from "../components";

const LikedJobs = () => {
  const { likedJobs } = useLike();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {likedJobs?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
            />
        ))}
      </View>
    </View>
  );
};

export default LikedJobs;
