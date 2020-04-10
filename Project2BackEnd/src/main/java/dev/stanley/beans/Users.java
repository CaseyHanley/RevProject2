package dev.stanley.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Users {
	
	@Id
	@GeneratedValue
	@Column(name = "id", updatable = false)
	private int u_id;
	
	@Column(name = "username", nullable = false) 
	private String username;
	
	@Column(name = "password", nullable = false) 
	private String password;
	
	@Column(name = "firstname", nullable = false) 
	private String firstname;
	
	@Column(name = "lastname", nullable = false) 
	private String lastname;
	
	@Column(name = "account_type", nullable = false) 
	private String account_type;
	
	
	public Users() {
		super();
	}


	public Users(int u_id, String username, String password, String firstname, String lastname, String account_type) {
		super();
		this.u_id = u_id;
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.account_type = account_type;
	}


	public int getU_id() {
		return u_id;
	}


	public void setU_id(int u_id) {
		this.u_id = u_id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getAccount_type() {
		return account_type;
	}


	public void setAccount_type(String account_type) {
		this.account_type = account_type;
	}


	@Override
	public String toString() {
		return "User [u_id=" + u_id + ", username=" + username + ", password=" + password + ", firstname=" + firstname
				+ ", lastname=" + lastname + ", account_type=" + account_type + "]";
	}
	
}
