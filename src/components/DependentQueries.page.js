import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchByEmail = (email) => {
  console.log(email);
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueriesPage = ({ email }) => {
  console.log(email);
  const { data: user } = useQuery(["user", email], () => fetchByEmail(email));
  //   console.log(user);

  const channelId = user?.data.channelId;
  //   console.log(channelId);

  useQuery(["courses", channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId,
  });

  return <div>DependentQueries.Page</div>;
};

export default DependentQueriesPage;
