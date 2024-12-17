package com.SulongEdukasyon.Sulong.Edukasyon.Controllers;

import com.SulongEdukasyon.Sulong.Edukasyon.Models.User.UserEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/roles")
public class RoleController {

    @Autowired
    private RoleService roleService;

    // This endpoint is responsible for registering a user and assigning them a role
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserEntity userEntity) {
        try {
            roleService.assignRoleToUser(userEntity);
            return ResponseEntity.ok("User registered successfully with role: " + userEntity.getRole());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error in registering user: " + e.getMessage());
        }
    }
}
