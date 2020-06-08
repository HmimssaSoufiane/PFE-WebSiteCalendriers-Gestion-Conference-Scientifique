package com.este.conf.controller;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.este.conf.models.Author;
import com.este.conf.models.Chair;
import com.este.conf.repositories.AuthorRepository;
import com.este.conf.repositories.ChairRepository;
@CrossOrigin(origins = "*", allowedHeaders = "*",maxAge = 3600)
@RestController
@RequestMapping("/api/login")
public class AuthController {

	@Autowired
	ChairRepository chairRepository;
	@Autowired
	AuthorRepository authorRepository;

	@PostMapping("/chairsLogin")
	public Chair chairsLogin(@NotNull @RequestBody Chair client) {
		if (client.getPassword() != null && client.getEmail() != null) {
			Chair _client = chairRepository.findByEmail(client.getEmail());
			if (_client != null)
				if (_client.getPassword().equals(client.getPassword()))
					return _client;
		}
		return null;
	}

	@PostMapping("/authorsLogin")
	public Chair findClientByEmail(@NotNull @RequestBody Author client) {

		if (client.getPassword() != null && client.getEmail() != null) {
			Chair _client = authorRepository.findByEmail(client.getEmail());
			if (_client != null)
				if (_client.getPassword().equals(client.getPassword()))
					return _client;
		}
		return null;
	}
}
