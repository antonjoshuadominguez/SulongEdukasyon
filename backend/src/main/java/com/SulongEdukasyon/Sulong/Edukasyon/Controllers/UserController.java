package com.SulongEdukasyon.Sulong.Edukasyon.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.Dto.*;
import com.SulongEdukasyon.Sulong.Edukasyon.Models.User.UserEntity;
import com.SulongEdukasyon.Sulong.Edukasyon.Service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterUserDto newUser) {
        return userService.register(newUser);
    }

    @PostMapping("/forget-password")
    public ResponseEntity<String> forgetPassword(@RequestBody String email) {
        return userService.forgetPassword(email);
    }

    @PatchMapping("/reset-password")
    public ResponseEntity<String> resetPassword(@RequestBody ResetPasswordDto reset) {
        return userService.resetPassword(reset.getEmail(), reset.getOtp(), reset.getNewPassword());
    }

    @PutMapping("/update-user")
    public ResponseEntity<?> updateUser(@RequestBody UpdateUserDto updatedInfo) {
        return userService.updateUser(updatedInfo);
    }

    @PatchMapping("/change-password")
    public ResponseEntity<String> changePassword(@RequestBody ChangePasswordDto changePass) {
        return userService.changePassword(changePass.getEmail(), changePass.getOldPassword(), changePass.getNewPassword());
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDto login) {
        return userService.login(login);
    }

    @GetMapping("/all")
    public ResponseEntity<List<UserEntity>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/get/{userID}")
    public ResponseEntity<?> getUser(@PathVariable long userID) {
        return userService.getUserById(userID);
    }

    @DeleteMapping("/delete/{userID}")
    public ResponseEntity<String> deleteUser(@PathVariable long userID) {
        return userService.deleteUser(userID);
    }
}
