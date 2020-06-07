package com.este.conf.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.este.conf.models.Author;
import com.este.conf.models.Chair;
import com.este.conf.repositories.AuthorRepository;
import com.este.conf.repositories.ChairRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/login")
public class AuthController {
	
	@Autowired
	ChairRepository chairRepository;
	@Autowired
	AuthorRepository authorRepository;

	@GetMapping("/chairsLogin")
	public  Chair chairsLogin(@RequestBody Chair client) {
		 
		 if (client.getPassword() != null && client.getEmail() != null) {
			 Chair _client = chairRepository.findByEmail(client.getEmail());
				if (_client.getPassword().equals(client.getPassword()))
					return _client;
			}
			return null;
	}
	
	@GetMapping("/authorLogin")
	public  Chair findClientByEmail(@RequestBody Author client) {
		 
		 if (client.getPassword() != null && client.getEmail() != null) {
			 Chair _client = authorRepository.findByEmail(client.getEmail());
				if (_client.getPassword().equals(client.getPassword()))
					return _client;
			}
			return null;
	}
}
