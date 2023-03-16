import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
// import Error from '../components/Error'
// import Spinner from '../components/Spinner'
import { registerUser } from '../features/auth/authActions'
import { logout } from '../features/auth/authSlice'
import { AppDispatch, RootState } from '../store/store'

const RegisterScreen = () => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  )
  const dispatch = useDispatch<AppDispatch>()
  const { register, handleSubmit } = useForm()

  const submitForm = (data: any) => {

    if (data.password !== data.confirmPassword) {
      alert('Password mismatch')
    }
    data.email = data.email.toLowerCase()
    dispatch(logout())
    // dispatch(registerUser(data))
  }
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {/* {error && <Error>{error}</Error>} */}
      <div className='form-group'>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          className='form-input'
          {...register('firstName')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-input'
          {...register('email')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          className='form-input'
          {...register('password')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Confirm Password</label>
        <input
          type='password'
          className='form-input'
          {...register('confirmPassword')}
          required
        />
      </div>
      <button type='submit' className='button' >
        {/* {loading ? <Spinner /> : 'Register'} */}
        Regidter
      </button>
    </form>
  )
}
export default RegisterScreen