<?php
$file = 'accusations.json';

// Check if accusations.json exists, otherwise create an empty JSON structure
if (!file_exists($file)) {
    file_put_contents($file, json_encode([]));
}

// Get existing accusations
$data = json_decode(file_get_contents($file), true);

// Get new accusation from AJAX request
if (isset($_POST['accusation'])) {
    $newAccusation = trim($_POST['accusation']);

    if (!empty($newAccusation)) {
        // Find the next key (increment the highest key)
        $nextKey = count($data) + 1;
        $data[$nextKey] = $newAccusation;

        // Save back to accusations.json
        file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));


    } else {

    }
} else {

}
?>