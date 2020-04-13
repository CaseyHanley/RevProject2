package dev.stanley.aspects;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Aspect
@Component
public class LoginAspect {

	@Around("loginMethod()")
	public Object authenticate(ProceedingJoinPoint pjp) throws Throwable {

		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
				.getRequest();
		HttpServletResponse response = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes())
				.getResponse();
		String username = request.getHeader("username");
		String password = request.getHeader("password");
		
		
//	Users u = new Users(username, password);
		
		System.out.println("Inside Authorizer :" +username
				+ " "+password);
		//The issue is with this If statement
//		if ((UserController.loginUN(u).equals(username))
//				&& (UserController.loginP(u).equals(password))) {
		if(("rome").equals(username)&&("pass").equals(password)){
			pjp.proceed();
			System.out.println("Successful login");
			return true;
		} else {
			System.out.println("Unsuccessful login");
			response.sendError(401);
			return false;
		}
	}

	@Pointcut("@annotation(dev.stanley.aspects.AuthorizeUser)")
	public void loginMethod() {

	}
}
