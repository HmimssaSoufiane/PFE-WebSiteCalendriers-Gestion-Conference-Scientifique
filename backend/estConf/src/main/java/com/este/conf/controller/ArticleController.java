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

import com.este.conf.models.Article;
import com.este.conf.repositories.ArticleRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/article")
public class ArticleController {
	
	@Autowired
	ArticleRepository articleRepository;
	//DaoCategorie daoCategorie;

	@GetMapping("/articles")
	public List<Article> getArticles() {
		return articleRepository.findAll();
	}

	@GetMapping("/articles/{id}")
	public Article getArticle(@PathVariable int id) {
		return articleRepository.findById(id).orElse(null);
	}

	@PostMapping("/articles") 
	public @ResponseBody String addArticler(@RequestBody Article article) {

		if (article != null) {
			articleRepository.save(article);
			return "Saved";
		}
		return "Errur";
	}



	@DeleteMapping("/articles/{id}")
	public String deleteArticle(@PathVariable int id) {
		articleRepository.deleteById(id);
		return "Done";
	}

}
