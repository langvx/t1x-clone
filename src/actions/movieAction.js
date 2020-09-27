import { axiosConnect } from "helpers/restConnector";

export const getMoviesList = () => {
  return (dispatch) => {
    axiosConnect({
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${process.env.REACT_APP_GROUP_SERIAL}`,
      method: `GET`,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
