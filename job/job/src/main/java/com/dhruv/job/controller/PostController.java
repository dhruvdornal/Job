package com.dhruv.job.controller;

import com.dhruv.job.repositories.PostRepo;
import com.dhruv.job.model.Post;
import com.dhruv.job.repositories.SearchRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    PostRepo pb;

    @Autowired
    SearchRepo sr;

    @GetMapping("/")
    public String hmm() {
        return "aai ghaal";
    }

    @GetMapping("/allPosts")
    public List<Post> getAllPost(){
        return pb.findAll();
    }

    @GetMapping("/posts/{text}")
    public List<Post> getAllPostsFiltered(@PathVariable String text){
        return sr.findByText(text);
    }

    @PostMapping("/post")
    public Post addPost(@RequestBody Post post) {
        return pb.save(post);
    }
}
