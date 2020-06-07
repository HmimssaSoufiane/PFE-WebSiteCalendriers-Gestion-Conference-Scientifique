package com.este.conf.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.este.conf.models.Chair;
import com.este.conf.repositories.ChairRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/chair")
public class ChairController {
	
	@Autowired
	ChairRepository chairRepository;
	//DaoCategorie daoCategorie;

	@GetMapping("/chairs")
	public List<Chair> getchairs() {
		return chairRepository.findAll();
	}

	@GetMapping("/chairs/{id}")
	public Chair getchair(@PathVariable int id) {
		return chairRepository.findById(id).orElse(null);
	}

	@PostMapping("/chairs") 
	public @ResponseBody String addchairr(@RequestBody Chair chair) {

		if (chair != null) {
			chairRepository.save(chair);
			return "Saved";
		}
		return "Errur";
	}



	@DeleteMapping("/chairs/{id}")
	public String deletechair(@PathVariable int id) {
		chairRepository.deleteById(id);
		return "Done";
	}

}
