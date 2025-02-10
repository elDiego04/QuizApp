package com.quizserver.service.user;

import com.quizserver.entities.User;

public interface UserService {

    User createUser(User user);
    Boolean hasUserWithEmail(String email);

    User login(User user);
}
