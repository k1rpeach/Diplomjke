import { useEffect } from "react";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { SCLoginPage } from "./LoginPage.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AppHeading } from "../../components/Typography/AppHeading/AppHeading";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/slices/userSlice";



interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().required("Введите E-Mail"),
  userpassword: yup
    .string()
    .min(8, "Не менее 8 символов")
    .required("Введите пароль"),
});

const mockUser = {
  mail: "kiryusha@gmail.com",
  phone_number: "102",
  user_id: 1,
  name: "YUNUS KOROL",
  reg_data: new Date().toISOString(),
  city: "Tashkent",
};

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: { useremail: "", userpassword: "" },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userSlice.user);

  useEffect(() => {
    // Проверяем, есть ли информация о пользователе в localStorage при загрузке страницы
    const userData = localStorage.getItem("userData");
    if (userData) {
      // Если есть, загружаем информацию о пользователе в стейт
      const parsedUserData = JSON.parse(userData);
      dispatch(changeUser(parsedUserData));
    }
  }, []);

  const handleLogout = () => {
    // Очищаем данные пользователя в localStorage и в стейте
    localStorage.removeItem("userData");
    dispatch(changeUser(null));
  };

  const onLoginFormSubmit: SubmitHandler<ILoginForm> = (data) => {
    // При успешной авторизации сохраняем информацию о пользователе в localStorage
    if (data.useremail === mockUser.mail && data.userpassword === "123123123") {
      localStorage.setItem("userData", JSON.stringify(mockUser));
      navigate("/main");
    } else {
      navigate("/");
      alert("Неверные данные");
    }
  };

  return (
    <SCLoginPage>
      <div>
        <AppHeading headingText={"Авторизация"} headingType={"h1"} />
        <form onSubmit={handleSubmit(onLoginFormSubmit)} className="login">
          <div className="authorisation">
            <Controller
              name="useremail"
              control={control}
              render={({ field }) => (
                <AppInput
                  isError={errors.useremail ? true : false}
                  errorMessage={errors.useremail?.message}
                  type={"email"}
                  placeholder={"E-mail"}
                  {...field}
                />
              )}
            />
            <Controller
              name="userpassword"
              control={control}
              render={({ field }) => (
                <AppInput
                  isError={errors.userpassword ? true : false}
                  errorMessage={errors.userpassword?.message}
                  type={"password"}
                  placeholder={"Пароль"}
                  {...field}
                />
              )}
            />
            <AppButton type="submit" buttonText={"Войти"} className="btn-76" />
          </div>
        </form>
      </div>
    </SCLoginPage>
  );
};
