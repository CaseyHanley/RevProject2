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
public class DeleteAspect {
	
	@Around("deleteMethod()")
	public Object authenticate(ProceedingJoinPoint pjp) throws Throwable{
		
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        HttpServletResponse response = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getResponse();
        String auth = request.getHeader("authorized");
        
        if(("pa$$word").equals(auth)) {
        	pjp.proceed();
        	return true;
        }else {
        	response.sendError(401);
        	return false;
        }
	}
	
	@Pointcut("@annotation(dev.stanley.aspects.AuthorizeDelete)")
	public void deleteMethod() {
		
	}
	

}
