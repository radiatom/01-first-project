import { useLocation, useNavigate, useParams, } from "react-router-dom";


export const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

//№60 withRouter це заглушка, цієї фукції не треба коли ми в фукціональному компоненті, в функціональній використовують хуки, але 
// оскільки ми в класовій тому треба написати цей костиль.