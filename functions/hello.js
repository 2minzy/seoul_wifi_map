const axios = reuqire('axios');

exports.handler = async (event, context) => {
  try {
    const result = axios.get(
      `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_PUBLIC_WIFI_API_KEY}/json/SebcPublicWifiEng/1/5/`
    );

    return {
      statusCode: 200,
      body: result.data,
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e,
    };
  }
};