const baseUrl = 'https://lcodrkmrpg.execute-api.ap-northeast-2.amazonaws.com';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};


export const fetchClassList = async () => {
  try {
      let response = await fetch(`${baseUrl}/getid`, {
      method: 'GET',
      headers: {
        ...headers,
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};


export const fetchPrerequisiteList = async () => {
  try {
      let response = await fetch(`${baseUrl}/prerequisite/`, {
      method: 'GET',
      headers: {
        ...headers,
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};