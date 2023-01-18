import { useDispatch } from "react-redux"
import * as sessionActions from "../../store/session"
import { csrfFetch } from "../../store/csrf"

const DemoUser = () => async (dispatch) => {
      
   const credential = 'DemoUSer'
const password = 123456
    const response = await csrfFetch('/api/session', {
      method: 'POST',
      body: JSON.stringify({
        credential,
        password,
      }),
    });
    const data = await response.json();
    dispatch(sessionActions.setUser(data.user));
    return response;
}
export default DemoUser