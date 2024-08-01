package com.dhruv.job.repositories;

import com.dhruv.job.model.Post;

import java.util.List;

public interface SearchRepo {

    List<Post> findByText(String text);

}
